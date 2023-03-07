class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Article {
  constructor(id, designation, price, category) {
    this.id = id;
    this.designation = designation;
    this.price = price;
    this.category = category;
  }

  // Calcul du prix TTC avec une TVA de 20%
  getPriceWithTaxes() {
    return this.price * 1.2;
  }
}

class EcommerceSite {
  constructor() {
    this.categories = [];
    this.articles = [];
  }

  // Ajouter une nouvelle catégorie
  addCategory(category) {
    this.categories.push(category);
  }

  // Ajouter un nouvel article
  addArticle(article) {
    // Vérifier si la catégorie de l'article existe
    const categoryExists = this._categoryExists(article.category.id);
    if (categoryExists) {
      this.articles.push(article);
    } else {
      console.log(`La catégorie "${article.category.name}" n'existe pas.`);
    }
  }

  // Trouver tous les articles d'une catégorie donnée
  findArticlesByCategory(category) {
    const articles = [];
    for (let i = 0; i < this.articles.length; i++) {
      if (this.articles[i].category.id === category.id) {
        articles.push(this.articles[i]);
      }
    }
    return articles;
  }

  // Trouver tous les articles dont le prix est compris entre minPrice et maxPrice
  findArticlesByPriceRange(minPrice, maxPrice) {
    const articles = [];
    for (let i = 0; i < this.articles.length; i++) {
      if (
        this.articles[i].price >= minPrice &&
        this.articles[i].price <= maxPrice
      ) {
        articles.push(this.articles[i]);
      }
    }
    return articles;
  }

  // Trouver tous les articles dont la désignation contient le texte search
  findArticlesByName(search) {
    const articles = [];
    for (let i = 0; i < this.articles.length; i++) {
      if (this.articles[i].designation.includes(search)) {
        articles.push(this.articles[i]);
      }
    }
    return articles;
  }

  _categoryExists(id) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        return true;
      }
    }
    return false;
  }
}

// Exemple d'utilisation
const ecommerceSite = new EcommerceSite();

// Ajouter des catégories
const electronicsCategory = new Category(1, "Electronique");
const clothingCategory = new Category(2, "Vêtements");
ecommerceSite.addCategory(electronicsCategory);
ecommerceSite.addCategory(clothingCategory);

// Ajouter des articles
const iphone = new Article(1, "iPhone", 999, electronicsCategory);
const macbook = new Article(2, "MacBook", 1499, electronicsCategory);
const tshirt = new Article(3, "T-shirt", 19.99, clothingCategory);
ecommerceSite.addArticle(iphone);
ecommerceSite.addArticle(macbook);
ecommerceSite.addArticle(tshirt);

// Trouver tous les articles d'une catégorie donnée
const electronicsArticles =
  ecommerceSite.findArticlesByCategory(electronicsCategory);
console.log(electronicsArticles); // [iphone, macbook]

// Trouver tous les articles dont le prix est compris entre 1000 et 1500 euros
const expensiveArticles = ecommerceSite.findArticlesByPriceRange(1000, 1500);
console.log(expensiveArticles); // [iphone, macbook]

// Trouver tous les articles dont la désignation contient "Mac"
const macArticles = ecommerceSite.findArticlesByName("Mac");
console.log(macArticles); // [macbook]
