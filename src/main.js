import createElement from './vdom/createElement'
import render from './vdom/render'
import mount from './vdom/mount'

const vApp = createElement('div', {
  attrs: {
    id: 'app'
  },
  children: [
    createElement('span', {
      children: [
        'virtual DOM'
      ]
    })
  ]
})

const app = render(vApp);

mount(app, document.getElementById('app'))

console.log(app)