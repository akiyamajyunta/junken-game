import { ref } from 'vue';
import { ResultHistory, JunkenResult } from '@/scripts/types';

export const playerHand = ref<number>(-1);
export const enemyHand = ref<number>(-1);
export const result = ref<string>("じゃんけん...");
export const results = ref<ResultHistory>({win: 0, lose: 0, draw: 0});

function dogLogic(playerHand: number): number {
    return (playerHand + 1) % 3;
};

function zundaLogic(playerHand: number): number {
    return Math.floor(Math.random() * 100000) % 3;
};

function gandhiLogic(playerHand: number): number {
    return playerHand
};

function godLogic(playerHand: number): number {
    return (playerHand + 2) % 3;
};

function getEnemyHand(enemyId: number, playerHand: number): number {
    const logics = [
        dogLogic,
        zundaLogic,
        gandhiLogic,
        godLogic
    ];
    return logics[enemyId](playerHand);
};

function isWin(
    playerHand: number, enemyHand: number
): JunkenResult {
    if (playerHand == enemyHand) {
        return JunkenResult.draw;
    } else if ((playerHand - enemyHand + 3) % 3 == 2) {
        return JunkenResult.win;
    } else {
        return JunkenResult.lose;
    }
}

export function pon(enemyId: number) {
    enemyHand.value = getEnemyHand(enemyId, playerHand.value);

    const junkenResult = isWin(playerHand.value, enemyHand.value);
    
    switch (junkenResult) {
        case JunkenResult.win:
            result.value = "勝ち!";
            results.value.win++;
            break;
        
        case JunkenResult.lose:
            result.value = "負け!";
            results.value.lose++;
            break;
        
        case JunkenResult.draw:
            result.value = "引き分け...!";
            results.value.draw++;
            break;
    };
}