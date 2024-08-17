import axios from 'axios';

const API_URL = 'https://dkhp.cofer.edu.vn/DangKyHocPhan/DangKyHocPhan';

interface Cookie {
  domain: string;
  hostOnly: boolean;
  httpOnly: boolean;
  name: string;
  path: string;
  sameSite: string;
  secure: boolean;
  session: boolean;
  storeId: string;
  value: string;
  expirationDate?: number;
}

interface LopHocPhan {
  idLopHocPhan: string;
  loaiDangky: number;
  idDot: number;
  nhomThucHanh: string;
}

async function dangKyLopHocPhan(
  lopHocPhan: LopHocPhan,
  cookies: Cookie[]
): Promise<void> {
  try {
    const cookieString = cookies
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join('; ');

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Cookie': cookieString,
    };

    const response = await axios.post(API_URL, lopHocPhan, { headers });

    console.log("Kiểm tra response.data.message:");
    console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);

    // Kiểm tra trường "check" trong response
    if (response.data.check === true) {
      console.log(
        `Đăng ký lớp ${lopHocPhan.idLopHocPhan} thành công!`
      );
    } else {
      console.error(
        `Đăng ký lớp ${lopHocPhan.idLopHocPhan} thất bại: ${response.data.message}`
      );
    }
  } catch (error) {
    console.error(
      `Đăng ký lớp ${lopHocPhan.idLopHocPhan} thất bại:`,
      error
    );
  }
}

const cookies: Cookie[] = [
  {
    "domain": "dkhp.cofer.edu.vn",
    "hostOnly": true,
    "httpOnly": true,
    "name": "__RequestVerificationToken",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "lKFHr5Kgz_geBRc5QtRtZSJdsq1k_D1x10HW9_PqUrWAUb4Xn6tfdEaonG-ziCvgzeYPofiPxfM1GPAYOJcWm6sAS3GZuYOMcF03tYEbd_Y1"
  },
  {
    "domain": ".dkhp.cofer.edu.vn",
    "hostOnly": false,
    "httpOnly": true,
    "name": "ASP.NET_SessionId",
    "path": "/",
    "sameSite": "lax",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "efga0kz1kf055lakobj5lee2"
  },
  {
    "domain": ".dkhp.cofer.edu.vn",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__RequestVerificationToken",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "lKFHr5Kgz_geBRc5QtRtZSJdsq1k_D1x10HW9_PqUrWAUb4Xn6tfdEaonG-ziCvgzeYPofiPxfM1GPAYOJcWm6sAS3GZuYOMcF03tYEbd_Y1"
  },
  {
    "domain": ".dkhp.cofer.edu.vn",
    "expirationDate": 1726738910.979079,
    "hostOnly": false,
    "httpOnly": true,
    "name": ".ASPXFORMSAUTH",
    "path": "/",
    "sameSite": "lax",
    "secure": true,
    "session": false,
    "storeId": "0",
    "value": "4E4EEB67889146180561A5ECAC0A1F02F9A2E39A365E116891B18A5C119D45BF31FCBEEBDE7B855FF2158E8AEDCDF3E85B4B7EF9689265FCF9628A4B34ED8353745754D79AB324E7ACD5C5F1183824253C37859957D2D7E8E7755BFFD8DD032CBAA3034279531FCE13CA8138BAD496414F23D0ED70FC6FCE1DD5463ECE768C83"
  }
];

const danhSachLopHocPhan: LopHocPhan[] = [
  {
    idLopHocPhan: 'rvFP69E4hLdiDLa10+6JGg==', // Thay thế bằng idLopHocPhan thực tế
    loaiDangky: 1,
    idDot: 31, // Thay thế bằng idDot thực tế
    nhomThucHanh: '', // Thay thế bằng nhomThucHanh thực tế nếu cần
  },
  // ... Các lớp học phần khác
];

async function dangKyHangLoat() {
  for (const lopHocPhan of danhSachLopHocPhan) {
    await dangKyLopHocPhan(lopHocPhan, cookies);
  }
}

dangKyHangLoat();