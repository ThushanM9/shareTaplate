import { tenant } from "../../../../Auth0/auth0Client";

export function checkbookCustomerData() {
  const dataArr: Array<Object> = [
    {
      key: "1",
      name: "Shawn Robertson",
      id: 100230001232,
      dob: "10/10/1993",
      code: 23233134241424,
      photo: "U",
      sign: 1,
      system: "fusion",
      tag: "individual",
      action: `${tenant}/cheque/request_chequebook/account_details`
    },
    {
      key: "1",
      name: "Shawn Robertson",
      id: 100230001232,
      dob: "10/10/1993",
      code: 23233134241424,
      photo: "U",
      sign: 1,
      system: "fusion",
      tag: "individual",
      action: "/request_chequebook_process"
    },
    {
      key: "1",
      name: "Shawn Robertson",
      id: 100230001232,
      dob: "10/10/1993",
      code: 23233134241424,
      photo: "U",
      sign: 1,
      system: "fusion",
      tag: "individual",
      action: "/request_chequebook_process"
    },
    {
      key: "1",
      name: "Shawn Robertson",
      id: 100230001232,
      dob: "10/10/1993",
      code: 23233134241424,
      photo: "U",
      sign: 1,
      system: "fusion",
      tag: "individual",
      action: "/request_chequebook_process"
    },
    {
      key: "1",
      name: "Shawn Robertson",
      id: 100230001232,
      dob: "10/10/1993",
      code: 23233134241424,
      photo: "U",
      sign: 1,
      system: "fusion",
      tag: "individual",
      action: "/request_chequebook_process"
    },
    {
      key: "1",
      name: "Shawn Robertson",
      id: 100230001232,
      dob: "10/10/1993",
      code: 23233134241424,
      photo: "U",
      sign: 1,
      system: "fusion",
      tag: "individual",
      action: "/request_chequebook_process"
    }
  ];
  return dataArr;
}
