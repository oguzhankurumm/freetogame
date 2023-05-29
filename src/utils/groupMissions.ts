interface MissionStats {
    fails: number;
    gameId: string;
    playTime: number;
    wins: number;
}

interface GroupedStats {
    [key: string]: MissionStats;
}

const groupMissionsByGameId = (progressStats: GroupedStats): MissionStats[] => {
    const groupedStats: GroupedStats = Object.values(progressStats).reduce((result, mission) => {
        const { gameId } = mission;

        if (!result[gameId]) {
            result[gameId] = {
                gameId,
                wins: 0,
                fails: 0,
                playTime: 0,
            };
        }

        result[gameId].wins += mission.wins;
        result[gameId].fails += mission.fails;
        result[gameId].playTime += mission.playTime;

        return result;
    }, {} as GroupedStats);

    const output: MissionStats[] = Object.values(groupedStats);
    return output;
};

export {
    groupMissionsByGameId
};