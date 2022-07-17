//! Подключение обработчика ошибок
const ApiStatus = require("../handler/apiStatus");

//! Подключение модели Пользователя и модели Вывода (1 часть)
const User = require("../models/User")
const Output = require("../models/Output")

class OutputService {

    async OutputCalc(userId, SV, CHSS, PPT) {
        try {
        //! проверка на наличие пользователя
        const candidate = await User.findByPk(userId)
            if(!candidate.OutputId) {
                //! Если нет айди записи, то делаем ее
                const SI = (SV/PPT);
                const UO = ((SV / CHSS) * 1000);
                const IUO = (UO / PPT);
                const saveOutput = await Output.create({
                    SV,SI,UO,IUO,CHSS
                })
                //! Пишем айди созданной записи в табличку юзера
                candidate.OutputId = saveOutput.dataValues.id
                await candidate.save();

                //! возвращаем табличку записи
                return saveOutput
            } else {
                //! если запись есть, то отдаем ее
                const user = await Output.findByPk(candidate.OutputId)
                return user
            }
        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}

module.exports = new OutputService
