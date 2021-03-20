import Services from './Services';
import { DATA_STATUS, URL } from '../utils/configs';

export const GetListProjectERP = () => {
  const url = `${URL}web/dataset/call_kw`;
  return new Promise((res, rej) => {
    Services(url, {
      params: {
        "model": "project.project",
        "method": "search_read",
        "args": [
          [
            [
              "active",
              "=",
              true
            ]
          ],
          [
            "name",
            "user_id",
            "type_id",
            "project_status",
            "members",
            "task_count",
            "date_start",
            "date_end",
            "tz",
            "is_favorite",
            "tasks"
          ],
          0,
          0,
          ""
        ],
        "kwargs": {},
        "context": {
          "tz": "Asia/Ho_Chi_Minh",
          "lang": "en_US"
        }
      },
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export const GetListUserContactERP = (members) => {
  const url = `${URL}web/dataset/call_kw`;
  return new Promise((res, rej) => {
    Services(url, {
      params: {
        "model": "res.users",
        "method": "search_read",
        "args": [
          [
            [
              "id",
              "in",
              members
            ]
          ],
          [
            "name",
            "email",
            "phone"
          ],
          0,
          0,
          ""
        ],
        "kwargs": {},
        "context": {
          "tz": "Asia/Ho_Chi_Minh",
          "lang": "en_US"
        }
      }
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export const GetListTaskProjectDetailERP = (projectID) => {
  const url = `${URL}web/dataset/call_kw`;
  return new Promise((res, rej) => {
    Services(url, {
      params: {
        "model": "project.task",
        "method": "search_read",
        "args": [
          [
            "|",
            [
              "project_id",
              "=",
              projectID
            ],
            [
              "contributor_ids.id",
              "=",
              projectID
            ]
          ],
          [
            "priority",
            "name",
            "date_deadline",
            "user_id",
            "create_uid",
            "duration",
            "type_id",
            "stage_id",
          ],
          0,
          0,
          ""
        ],
        "kwargs": {},
        "context": {
          "tz": "Asia/Ho_Chi_Minh",
          "lang": "en_US"
        }
      }
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export const GetEditProjectScreen = ({ id, nameProject, id_Project, members }) => {
  const url = `${URL}web/dataset/call_kw`;
  return new Promise((res, rej) => {
    Services(url, {
      params: {
        "model": "project.project",
        "method": "write",
        "args": [
          [
            id_Project
          ],
          {
            "name": nameProject,
            "user_id": id,
            "members": [
              [
                6,
                false,
                members
              ]
            ]
          }
        ],
        "kwargs": {},
        "context": {
          "tz": "Asia/Ho_Chi_Minh",
          "lang": "vi_VN"
        }
      }
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export const GetFavoriteProjectScreen = ({ id_Project, isFavorite }) => {
  const url = `${URL}web/dataset/call_kw`;
  return new Promise((res, rej) => {
    Services(url, {
      params: {
        "model": "project.project",
        "method": "write",
        "args": [
          [
            id_Project
          ],
          {
            "is_favorite": isFavorite
          }
        ],
        "kwargs": {},
        "context": {
          "tz": "Asia/Ho_Chi_Minh",
          "lang": "vi_VN"
        }
      }
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export const GetListUserManagerERP = () => {
  const url = `${URL}web/dataset/call_kw`;
  return new Promise((res, rej) => {
    Services(url, {
      params: {
        "model": "res.users",
        "method": "search_read",
        "args": [
          [

          ],
          [
            "name",
            "email",
            "phone"
          ],
          0,
          0,
          ""
        ],
        "kwargs": {},
        "context": {
          "tz": "Asia/Ho_Chi_Minh",
          "lang": "en_US"
        }
      }
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export const GetListUserAddERP = () => {
  const url = `${URL}web/dataset/call_kw`;
  return new Promise((res, rej) => {
    Services(url, {
      params: {
        "model": "res.users",
        "method": "search_read",
        "args": [
          [

          ],
          [
            "name",
            "email",
            "phone"
          ],
          0,
          0,
          ""
        ],
        "kwargs": {},
        "context": {
          "tz": "Asia/Ho_Chi_Minh",
          "lang": "en_US"
        }
      }
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};

export const GetProjectTypeERP = () => {
  const url = `${URL}web/dataset/call_kw`;
  return new Promise((res, rej) => {
    Services(url, {
      params: {
        "model": "project.task.type",
        "method": "search_read",
        "args": [
          [
            [
              "project_ids",
              "=",
              15
            ]
          ],
          [
            "name"
          ],
          0,
          0,
          ""
        ],
        "kwargs": {},
        "context": {
          "tz": "Asia/Ho_Chi_Minh",
          "lang": "en_US"
        }
      }
    })
      .then((resService) => {
        res({
          status: DATA_STATUS.SUCCESS,
          data: resService,
        });
      })
      .catch((rejService) => {
        res({
          status: DATA_STATUS.FAILED,
          err: rejService,
        });
      });
  });
};
