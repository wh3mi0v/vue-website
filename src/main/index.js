import index from './views/index'

import permission from '../permission'
import pkgTemplate from '../__template'
import mocky from '../mocky'

export default [{
    path: '/',
    name: '首页',
    component: index,
    children: [
        ...pkgTemplate,
        ...permission,
        ...mocky
    ]
}]
