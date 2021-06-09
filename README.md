# Sandypockets Blog
My personal blog. Made with Next.js, using React, Tailwind CSS, and MDX. 

![https://github.com/sandypockets/sandypockets-blog/blob/main/docs/sandypocketsblog-wip-demo.png?raw=true](https://github.com/sandypockets/sandypockets-blog/blob/main/docs/sandypocketsblog-wip-demo.png?raw=true)

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

## ✏️ Adding a blog post

New blog posts should be added to the `pages/blog/` directory as an `.mdx` file. The first few lines of the post must contain the following information, with the values changed appropriately. 

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

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus pellentesque dolor non egestas.
```

## 📸 Screenshots

_Coming soon..._