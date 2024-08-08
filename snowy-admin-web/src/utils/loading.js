/**
 * 页面全局 Loading
 * @method start 创建 loading
 * @method done 移除 loading
 */
export const NextLoading = {
	// 创建 loading
	start: () => {
		const el = document.querySelector('.admin-ui')
		if (el) return
		const body = document.body
		const div = document.createElement('div')
		div.setAttribute('class', 'admin-ui')
		div.innerHTML = `
			  <div class="app-loading">
				<div class="app-loading-logo">
				  <img src="/img/logo.png"/>
				</div>
				<div><span class="dot dot-spin"><i></i><i></i><i></i><i></i></span></div>
				<div class="app-loading-title">Snowy</div>
			</div>`
		body.insertBefore(div, body.childNodes[0])
		window.nextLoading = true
	},
	// 移除 loading
	done: (time = 0) => {
		nextTick(() => {
			setTimeout(() => {
				window.nextLoading = false
				const el = document.querySelector('.admin-ui')
				el?.parentNode?.removeChild(el)
			}, time)
		})
	}
}