export function getHandIcon(hand: number) {
    const icons = [
        "../../imgs/hand_gu.png",
        "../../imgs/hand_choki.png",
        "../../imgs/hand_pa.png"
    ];

    const url = new URL(icons[hand], import.meta.url).href;
    return url;
}

export function getEnemyIcon(enemyId: number) {
    const icons = [
        "../../imgs/character_dog.png",
        "../../imgs/character_zunda.png",
        "../../imgs/character_gandhi.png",
        "../../imgs/character_god.png",
    ];

    const url = new URL(icons[enemyId], import.meta.url).href;
    return url;
}