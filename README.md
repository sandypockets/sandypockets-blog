# Sandypockets Blog
My personal blog. Made with Next.js, using React, Tailwind CSS, and MDX. The project is live in production at [sandypockets.dev](https://sandypockets.dev), and is deployed with Vercel.

![https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-homepage.png?raw=true](https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-homepage.png?raw=true)

## 🛠 Getting Started
Built and tested using `Node 14`. Dependencies managed with `yarn`

1. Clone the project.
```shell
git clone git@github.com:sandypockets/sandypockets-blog.git
```

2. Install dependencies.
```shell
yarn install
```

3. Run the development server.
```shell
next dev
```

4. Navigate to [`http://localhost:3000`](http://localhost:3000) in your browser.

> Note: Custom error pages (404, and 500) can be viewed by appending the error code to the root URL: [`http://localhost:3000/404`](http://localhost:3000/404)

## 📦 Dependencies
* mdx-js/loader `^1.6.22`
* next/mdx `^10.2.3`
* next `10.2.3`
* react `17.0.2`
* react-dom `17.0.2`

### Dev Dependencies
* autoprefixer` ^10.2.6`
* postcss `^8.3.0`
* tailwindcss `^2.1.4`

## 🧭 Roadmap
A list of to-dos.

* Add MDX components. The MDX pages are rendering properly, but at this time they must be styled with HTML and CSS, which is less than ideal. The MDX files do accept React components, but will not pick up on Markdown syntax until MDX components get set up.
* Projects page. Each project will be deployed to its own subdomain of this site. 
* Spruce up 404 and 500 pages
* Add popover menu for mobile views

## ✏️ Adding a blog post

New blog posts should be added to the `pages/blog/` directory as an `.mdx` file. The structure of a post is as follows:

```javascript
import BlogPost from '../../components/BlogPost'

export const meta = {
  title: 'Hello World',
  description: 'Small description goes here',
  date: 'June 09, 2021',
  readTime: 2,
  href: '/blog/hello-world'
}

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus pellentesque dolor non egestas. In sed tristique elit. Cras vehicula, nisl vel ultricies gravida, augue nibh laoreet arcu, et tincidunt augue dui non elit. Vestibulum semper posuere magna, quis molestie mauris faucibus ut.

```

Add markdown content (including React components) below the `export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>` line.

## 🚀 Performance
### Results from [`Google Page Speed Insights`](https://developers.google.com/speed/pagespeed/insights/)

![https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-performance-lighthouse.png?raw=true](https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-performance-lighthouse.png?raw=true)

### Results from [`web.dev/measure`](https://web.dev/measure)

![https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-performance.png?raw=true](https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-performance.png?raw=true)

## 📸 Screenshots

![https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-homepage.png?raw=true](https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-homepage.png?raw=true)

![https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-about.png?raw=true](https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-about.png?raw=true)

![https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-blog.png?raw=true](https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-blog.png?raw=true)

![https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-article.png?raw=true](https://github.com/sandypockets/sandypockets-blog/blob/main/docs/blog-article.png?raw=true)