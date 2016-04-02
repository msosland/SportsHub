class ArticlesController < ApplicationController

  def recent
    articles = Article.ordered_json
    render json: articles
  end

  def popular
    articles = Article.joins(:favorites)
               .select('articles.title, count(article_id') as 'article_count')
               .group('article.id')
               .order('article_count desc')
               .limit(10)
    render json: articles.to_json
  end
end