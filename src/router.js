import foo from './views/foo'
import bar from './views/bar'

const routes = {
  '/foo': foo,
  '/bar': bar
}

// Router 类，控制页面根据 URl 切换
class Router {
  start() {
    window.addEventListener('popstate', () => {
      this.load(location.pathname)
    })

    // 打开页面时加载当前页面
    this.load(location.pathname)
  }

  // 前往 path
  go(path) {
    history.pushState({}, '', path)
    // 加载页面
    this.load(path)
  }

  // 加载 path 路径的页面
  load(path) {
    // 首页
    if (path === '/') path = '/foo'
    // 创建页面事例
    const view = new routes[path]()
    view.mount(document.body)
  }
}
export default Router