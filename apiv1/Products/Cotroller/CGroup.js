"use strict";
const Group         = require("../Model/Group");
const CBase         = require("./CBase");

class CGroup extends Group {
    static fds () {
        return {
            ID          : "id",
            CODE        : "code",
            NAME        : "name",
            STATUS      : "status",
            URL         : "url",
            CREATEAT    : "createAt"
        }
    }

    constructor() {
        super();
    }

    /**
     * Kiểm tra dữ liệu hợp lệ để đăng ký
     * @returns {Error}
     *      OK : Thành công
     *      !OK : Xem lỗi ở Error
     */
    isValidGroup() {
        // Kiểm tra field null
        let arrayField = ["code", "name", "url"];
        return CBase.isFieldsNotNull(this, arrayField)
    }

    static getModelDB() {
        return {
            id          : String,
            name        : String,
            status      : Number,
            createAt    : String
        }
    };

    /**
     * Hàm chuyển dữ liệu request về dữ liệu controller group
     * @param data : Dữ liệu request cần chuyển thành controller
     * @returns {Group} : controller group
     */
    static parser(data) {
        // Kiểm tra đầu vào parser là null thì trả về null
        if (data === null || data === undefined) {
            return null;
        }

        // Đọc dữ liệu group từ data object
        let cGroup = new CGroup();
        Object.assign(cGroup, data);
        return cGroup;
    };
}

module.exports = CGroup;