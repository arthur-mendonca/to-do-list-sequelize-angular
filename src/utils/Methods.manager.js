const nodeSchedule = require("node-schedule");

class MethodsManager {
    async scheduleDelete(model, whereClause, timeToDelete) {
        nodeSchedule.scheduleJob(timeToDelete, async () => {
            try {
                await model.destroy(whereClause);
            } catch (error) {
                console.error("Erro ao excluir o item");
            }
        });
    }

    degreesToRadians(degrees) {
        return (degrees * Math.PI) / 180;
    }

    haversineFormula(point1, point2) {
        const EARTH_RADIUS = 6371;
        const deltaLat = this.degreesToRadians(point2.lat - point1.lat);
        const deltaLong = this.degreesToRadians(point2.lng - point1.lng);

        const a =
            Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(this.degreesToRadians(point1.lat)) *
                Math.cos(this.degreesToRadians(point2.lat)) *
                Math.sin(deltaLong / 2) *
                Math.sin(deltaLong / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = EARTH_RADIUS * c;

        return distance;
    }
}

module.exports = new MethodsManager();
