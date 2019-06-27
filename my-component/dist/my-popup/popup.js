let queue = [];
//获取当前页
function getPage() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}
const Popup = options => {
    options = Object.assign({}, Popup.currentOptions, options);
    return new Promise((resolve, reject) => {
        const page = options.page||getPage();
        const popup = page.selectComponent(options.selector);
        delete options.selector;
        if (popup) {
          //const returnedTarget = Object.assign(options,{ showPopup: reject, hidePopup: resolve});
          const returnedTarget = Object.assign(popup.data, options);
          returnedTarget.show = !returnedTarget.show;
          popup.setData(returnedTarget);
          //queue.push(popup);
        }
        else {
          console.warn('未找到弹窗节点id,节点id默认为my-Popup,请检查');
        }
    });
};

Popup.defaultOptions = {
    //show: true,
    selector:'#my-Popup',
    zIndex: 99999,
    title: '标题',
    content: '弹窗内容',
    btn_ok: '确认',
    btn_no: '取消'
};

//打开弹窗的方法
Popup.alert = Popup;

//关闭弹窗的方法
Popup.close = Popup;

// 注销的部分是无用代码
// Popup.confirm = options => Popup(Object.assign({showCancelButton: true }, options));
// Popup.close = () => {
//   queue.forEach(popup => {
//       popup.close();
//     });
//     queue = [];
// };

// Popup.stopLoading = () => {
//   queue.forEach(popup => {
//     popup.stopLoading();
//     });
// };

// Popup.setDefaultOptions = options => {
//     Object.assign(Popup.currentOptions, options);
// };

Popup.resetDefaultOptions = () => {
    Popup.currentOptions = Object.assign({}, Popup.defaultOptions);
};

Popup.resetDefaultOptions();

export default Popup;
