const articleTemplate = document.querySelector("[data-article-template]")
const articleContainer = document.querySelector("[data-articles-container]")
const searchInput = document.querySelector("[data-search]")

let articles = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  articles.forEach(article => {
    const isVisible = 
      article.title.toLowerCase().includes(value) ||
      article.date.toLowerCase().includes(value) ||
      article.tags.some(tag => tag.toLowerCase().includes(value))
    article.element.classList.toggle("hide", !isVisible)
  })
})

fetch("writing/articles.json")
  .then(res => res.json())
  .then(data => {
    articles = data.map(article => {
      const card = articleTemplate.content.cloneNode(true).children[0]
      const title = card.querySelector("[data-title]")
      const date = card.querySelector("[data-date]")
      const tags = card.querySelector("[data-tags]")

      title.textContent = article.title
      date.textContent = article.date 
      tags.textContent = article.tags.join(", ")

      card.href = article.url

      articleContainer.append(card)

      return {
        title: article.title,
        date: article.date,
        tags: article.tags,
        element: card
      }
    })
  })
