import { colors, shadeColor } from "./config.js";
import { User } from "./User.js";
import { Node } from "./Node.js";
import { Canvas } from "./Canvas.js";

const colorWrapper = document.querySelector("#color_wrapper");

function colorItem(colorName) {
    let div = document.createElement("div");

    div.classList.add("color_picker");
    div.style.backgroundColor = colors[colorName];
    div.style.borderColor = shadeColor(colors[colorName], -30);
    div.dataset.color = colorName;

    div.addEventListener("click", () => {
        Node.find(User.selectedNode).color = colors[div.dataset.color];
        Canvas.update();
    });

    return div;
}

document.addEventListener("DOMContentLoaded", () => {
    for (const color in colors) {
        colorWrapper.appendChild(colorItem(color));
    }
});
