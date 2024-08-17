"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var DangKyHocPhan = /** @class */ (function () {
    function DangKyHocPhan(cookie) {
        this.API_URL = 'https://dkhp.cofer.edu.vn/DangKyHocPhan/DangKyHocPhan';
        this.headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'https://dkhp.cofer.edu.vn',
            'Referer': 'https://dkhp.cofer.edu.vn/DangKyHocPhan',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
            'X-Requested-With': 'XMLHttpRequest',
            'Cookie': cookie,
        };
    }
    DangKyHocPhan.prototype.dangKyLop = function (lopHocPhan) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this.API_URL, lopHocPhan, {
                                headers: this.headers,
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.data.check === true) {
                            console.log("\u0110\u0103ng k\u00FD l\u1EDBp ".concat(lopHocPhan.idLopHocPhan, " th\u00E0nh c\u00F4ng!"));
                        }
                        else {
                            console.error("\u0110\u0103ng k\u00FD l\u1EDBp ".concat(lopHocPhan.idLopHocPhan, " th\u1EA5t b\u1EA1i: ").concat(response.data.message));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("\u0110\u0103ng k\u00FD l\u1EDBp ".concat(lopHocPhan.idLopHocPhan, " th\u1EA5t b\u1EA1i:"), error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DangKyHocPhan.prototype.dangKyHangLoat = function (danhSachLopHocPhan) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, danhSachLopHocPhan_1, lopHocPhan;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, danhSachLopHocPhan_1 = danhSachLopHocPhan;
                        _a.label = 1;
                    case 1:
                        if (!(_i < danhSachLopHocPhan_1.length)) return [3 /*break*/, 4];
                        lopHocPhan = danhSachLopHocPhan_1[_i];
                        return [4 /*yield*/, this.dangKyLop(lopHocPhan)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return DangKyHocPhan;
}());
// Cookie đã được cập nhật
var cookie = 'ASP.NET_SessionId=efga0kz1kf055lakobj5lee2; __RequestVerificationToken=lKFHr5Kgz_geBRc5QtRtZSJdsq1k_D1x10HW9_PqUrWAUb4Xn6tfdEaonG-ziCvgzeYPofiPxfM1GPAYOJcWm6sAS3GZuYOMcF03tYEbd_Y1; .ASPXFORMSAUTH=4E4EEB67889146180561A5ECAC0A1F02F9A2E39A365E116891B18A5C119D45BF31FCBEEBDE7B855FF2158E8AEDCDF3E85B4B7EF9689265FCF9628A4B34ED8353745754D79AB324E7ACD5C5F1183824253C37859957D2D7E8E7755BFFD8DD032CBAA3034279531FCE13CA8138BAD496414F23D0ED70FC6FCE1DD5463ECE768C83';
// Danh sách lớp học phần
var danhSachLopHocPhan = [
    {
        idLopHocPhan: 'rvFP69E4hLdiDLa10+6JGg==',
        loaiDangky: 1,
        idDot: 31,
        nhomThucHanh: '',
    },
    // Thêm các lớp học phần khác vào đây
];
var dangKyHocPhan = new DangKyHocPhan(cookie);
dangKyHocPhan.dangKyHangLoat(danhSachLopHocPhan);
