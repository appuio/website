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

activate :external_pipeline,
  name: :price_calculator,
  command: 'sh price-calc.sh',
  source: 'tmp/price-calculator',
  latency: 1

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


# Evil icons https://github.com/outpunk/evil-icons
require 'evil_icons'
helpers EvilIcons::Helpers

# Redirects
# sadly doesnt work for I18n
# redirect "/offers/", to: "/index.html"


###
# Helpers
###
helpers do
  def nav_active(path)
    if(current_page.path.end_with? path)
      "active"
    else
      ""
    end
  end
  def parent_active(offer1, offer2, offer3)
    if(current_page.path.end_with? offer1 or current_page.path.end_with? offer2 or current_page.path.end_with? offer3)
      "active"
    else
      ""
    end
  end
  def change_language(language)
    if (I18n.locale != :de and language == 'de')
      "../" + current_page.path.sub(I18n.locale.to_s + "/", "")
    else
      "/" + language + "/" + current_page.path.sub(I18n.locale.to_s + "/", "")
    end
  end
end
# Would theoretically create class for pages - but doesnt work yet - source: https://benfrain.com/understanding-middleman-the-static-site-generator-for-faster-prototyping/
# def page_classes
#   path = request.path_info.dup
#   path < < settings.index_file if path.match(%r{/$})
#   path = path.gsub(%r{^/}, '')
#
#   classes = []
#   parts = path.split('.')[0].split('/')
#   parts.each_with_index { |path, i| classes << parts.first(i+1).join('_') }
#
#   classes.join('')
# end
