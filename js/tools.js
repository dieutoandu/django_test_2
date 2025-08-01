function getBMI(height, weight) {
        return weight / (height / 100) ** 2;
    }

function mes(bmi){
    if (bmi >= 27) {
            mess = '啊～「肥胖」，需要立刻力行「健康體重管理」囉！';
            color='red';
        }
        else if (bmi >= 24 && bmi < 27) {
            mess = '「體重過重」了，要小心囉，趕快力行「健康體重管理」！';
            color='orange';
        }
        else if (bmi >= 18.5 && bmi < 24) {
            mess = '恭喜！「健康體重」，要繼續保持！';
            color='green';
        }
        else {
            mess = '「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！';
            color='red';
        }
    return [mess,color];
}