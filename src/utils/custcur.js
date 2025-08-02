const cursors = () => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".follower");

    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    });

    function animateFollower() {
        const deltaX = mouseX - posX;
        const deltaY = mouseY - posY;

        posX += deltaX * 0.15;
        posY += deltaY * 0.15;

        follower.style.left = posX + "px";
        follower.style.top = posY + "px";

        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        const dx = posX - mouseX;
        const dy = posY - mouseY;
        const distance = Math.min(Math.hypot(dx, dy) / 5, 8);

        const scaleX = 1 + distance * 0.1;
        const scaleY = 1 - distance * 0.05;

        follower.style.transform = `translate(-50%, -50%) rotate(${angle + 180}deg) scale(${scaleX}, ${scaleY})`;

        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.addEventListener("mousedown", () => {
        follower.style.transition = "transform 0.1s ease";
        follower.style.transform += " scale(0.8)";
    });

    document.addEventListener("mouseup", () => {
        follower.style.transition = "transform 0.2s ease";
    });

    // New: Fade out and move off-screen on mouse leave
    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
        follower.style.opacity = "0";
        cursor.style.transform = "translate(-50%, -50%) scale(0.5)";
        follower.style.transform = "translate(-50%, -50%) scale(0.5)";
    });

    // Fade back in on mouse enter
    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
        follower.style.opacity = "1";
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        follower.style.transform = "translate(-50%, -50%) scale(1)";
    });

    //hovering on img
    const cursorCust = () => {
        const previewHovers = document.querySelectorAll(".projectHover"); // select all elements with class

        previewHovers.forEach(previewHover => {
            previewHover.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor__hovered');
                cursor.innerHTML = 'preview';
                console.log('on button');
                follower.style.display = 'none';
            });

            previewHover.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor__hovered');
                follower.style.display = 'block';
                cursor.innerHTML = '';
                console.log('off button');
            });
        });
    };

    if (window.innerWidth <= 768) {
    cursorCust();
    }


}


export default cursors();
