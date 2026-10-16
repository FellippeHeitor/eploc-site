# Mesmas versões que o GitHub Pages usa para o que este site precisa
# (https://pages.github.com/versions/). Não usa a gem "github-pages" porque ela
# não instala no Ruby 4 (depende do commonmarker 0.23, que exige Ruby < 4.0).
# Uso local: bundle install && bundle exec jekyll serve
source "https://rubygems.org"

gem "jekyll", "3.10.0"
gem "kramdown-parser-gfm", "1.1.0"

group :jekyll_plugins do
  gem "jekyll-sitemap", "1.4.0"
end

# Saíram da biblioteca padrão do Ruby e o Jekyll 3 ainda usa
gem "webrick"
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
