class User < ApplicationRecord
  validates :password, length: { minimum: 6, allow_nil: false }
  validates :password_digest, :session_token, :username, presence: true
  validates :session_token, :username, :email, uniqueness: true

  after_initialize :ensure_session_token

  has_many :photos,
  primary_key: :id,
  foreign_key: :poster_id,
  class_name: :Photo

  has_many :followers
  has_many :followees

  attr_reader :password

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = Bcrypt::Password.create(password)
  end

  def is_password?(password)
    Bcrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.get_user_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end
end
