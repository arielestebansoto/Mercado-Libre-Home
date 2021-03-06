//to insert the category__box elements

import { svgs } from './svgCategories.js'

for (var i = 0; i < 14; i++) {
    let categoryBox = document.querySelector(`#category__box${i+1}`)
    let categoryBoxSvgContainer = categoryBox.querySelector('.category__box--svg-container')

    let categoryBoxTitle = categoryBox.querySelector('.category__box--title')

    categoryBoxSvgContainer.innerHTML = svgs().svg1.svg
    categoryBoxTitle.innerHTML = svgs().svg1.name
    console.dir(svgs)
}
