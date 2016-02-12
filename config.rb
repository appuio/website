###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# General configuration
require 'builder'

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload, livereload_css_target: 'stylesheets/main.css.scss'
  activate :autoprefixer do |config|
    config.browsers = ['last 3 versions', 'Explorer >= 9']
  end
end

# Build-specific configuration
configure :build do

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  activate :autoprefixer do |config|
    config.browsers = ['last 3 versions', 'Explorer >= 9']
  end
end

activate :i18n
activate :automatic_image_sizes

activate :deploy do |deploy|
  deploy.deploy_method   = :sftp
  deploy.host            = ENV['SFTP_SERVER_NAME']
  deploy.port            = 22
  deploy.path            = ENV['SFTP_DEPLOY_PATH']
  deploy.user            = ENV['SFTP_USERNAME']
  deploy.password        = ENV['SFTP_PASSWORD']
  deploy.build_before = true
end

# Evil icons https://github.com/outpunk/evil-icons
require 'evil_icons'
helpers EvilIcons::Helpers
