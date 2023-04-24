// 定义一个函数
import { ref, reactive, onMounted } from 'vue';

//实时监听鼠标的动态
function MouseMovement() {
    // 定义默认的宽高
    const movement = reactive({ w: window.pageXOffset, h: window.pageYOffset });
    onMounted(() => {
        // 当窗口发生变化时候更新宽高
        window.addEventListener('mousemove', function (e) {
            movement.w = e.pageX;
            movement.h = e.pageY;
        });
    });
    // 返回size
    return movement;
}
// 导出函数
export { MouseMovement };
