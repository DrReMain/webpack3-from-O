import _ from 'lodash'
import './styles.css'

function component() {
    var element = document.createElement('div');
    // Lodash
    element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');
    return element
}

document.body.appendChild(component());