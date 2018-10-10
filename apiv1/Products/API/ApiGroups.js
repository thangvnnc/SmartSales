"use strict";
const express       = require("express");
const mongoose      = require("mongoose");
const CBase         = require("../Cotroller/CBase");
const CHistory      = require("../Cotroller/CHistory");
const CLog          = require("../Cotroller/CLog");
const Error         = require("../Define/Error/UserError");
const CGroup        = require("../Cotroller/CGroup");

const Schema        = mongoose.Schema;
const DBGroups      = mongoose.model("Groups", new Schema(CGroup.getModelDB(), { versionKey: false }));
const DBHistorys    = mongoose.model("Historys", new Schema(CHistory.getModelDB(), { versionKey: false }));
const router        = express.Router();

router.post("/add", async (req, res) => {
    // Lấy dữ liệu từ client request
    let dataReq = req.body;
    let cGroup = CGroup.parser(dataReq);

    // Kiểm tra điều kiện đầu vào
    let retValid = cGroup.isValidGroup();
    if (retValid.code !== Error.CODE_OK){
        res.send(retValid);
        return;
    }

    // Kiểm tra thông tin
    try {
        let data = await DBGroups.findOne().where(CGroup.fds().CODE).equals(cGroup.code).exec();
        if (data !== null){
            res.send(Error.ERR_EXEC_DB_EXIST(cGroup.code));
            return;
        }
    }
    catch (err) {
        res.send(Error.ERR_EXECUTE_DB(err + ""));
        return;
    }

    try {
        // Tạo thời gian hiện tại
        let timeNow = CBase.timeNow();

        // Tạo mã id
        cGroup.id = CBase.timeNow();

        // Kiểm tra khời tạo ngày create
        if (cGroup.createAt === null){
            cGroup.createAt = timeNow;
        }

        // Thêm dữ liệu vào db
        let resultInsert = await DBGroups.create(cGroup);
        if (resultInsert !== null) {
            res.send(Error.OK(cGroup.parser(resultInsert._doc)));
            return;
        }
        res.send(Error.ERR_UNKNOWN());
    }
    catch (err) {
        res.send(Error.ERR_EXECUTE_DB(err + ""));
        return;
    }
});

