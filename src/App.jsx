import React from 'react'
import MenuItem from './components/MenuItem'
import { mainCourses, desserts } from './data/menuData'


export default function App() {
const totalItems = mainCourses.length + desserts.length
const currentYear = new Date().getFullYear()


return (
<div className="app">
<header className="header">
<h1>Delicious Bites</h1>
<p className="tagline">Delicious Food, Made Fresh Daily</p>
</header>


<main className="container">
<section className="menu-stats">
<p>Total items on menu: <strong>{totalItems}</strong></p>
<p>Open Daily: 11 AM - 10 PM</p>
<p>Contact: +91-98765-43210 | 123 Food Street, City</p>
</section>


<section className="category">
<h2>Main Courses</h2>
<div className="grid">
{mainCourses.map(item => (
<MenuItem key={item.id} {...item} />
))}
</div>
</section>


<section className="category">
<h2>Desserts</h2>
<div className="grid">
{desserts.map(item => (
<MenuItem key={item.id} {...item} />
))}
</div>
</section>
</main>


<footer className="footer">
<p>Delicious Bites</p>
<p><a href="mailto:hello@deliciousbites.example">hello@deliciousbites.example</a> | <a href="#">www.deliciousbites.example</a></p>
<p>© {currentYear} Delicious Bites</p>
</footer>
</div>
)
}