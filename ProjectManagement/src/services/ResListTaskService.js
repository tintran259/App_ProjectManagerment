import Services from './Services';
import {DATA_STATUS} from '../utils/configs';

function GetListTaskERP(uid, url) {
  const urlFull = `${url}/web/dataset/call_kw`;

  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        model: 'project.task',
        method: 'search_read',
        args: [
          ['|', ['user_id', '=', uid], ['contributor_ids.id', '=', uid]],
          [
            'create_uid',
            'description',
            'write_uid',
            'type_id',
            'create_date',
            'priority',
            'name',
            'creator_id',
            'date_assign',
            'write_date',
            'date_deadline',
            'date_end',
            'sprint_id',
            'release_id',
            'project_id',
            'user_id',
            'stage_id',
            'duration',
            'progress',
            'checklist_task_instance_ids',
          ],
          0,
          0,
          '',
        ],
        kwargs: {},
        context: {
          tz: 'Asia/Ho_Chi_Minh',
          lang: 'en_US',
        },
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
}

function CreateTaskERP(
  url,
  uid,
  nameTask,
  deadline,
  priority,
  projectIdCV,
  typeIdCV,
  sprintIdCV,
) {
  const urlFull = `${url}/web/dataset/call_kw`;

  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        model: 'project.task',
        method: 'create',
        args: [
          {
            name: nameTask,
            option: 'task',
            date_deadline: deadline,
            priority: priority,
            project_id: projectIdCV,
            user_id: uid,
            type_id: typeIdCV,
            sprint_id: sprintIdCV,
          },
        ],
        kwargs: {},
        context: {
          tz: 'Asia/Ho_Chi_Minh',
          lang: 'vi_VN',
        },
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
}

function GetListSprintERP(url) {
  const urlFull = `${url}/web/dataset/call_kw`;

  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        model: 'project.scrum.sprint',
        method: 'search_read',
        args: [[], ['name'], 0, 0, ''],
        kwargs: {},
        context: {
          tz: 'Asia/Ho_Chi_Minh',
          lang: 'en_US',
        },
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
}

function GetListProjectTypeERP(url) {
  const urlFull = `${url}/web/dataset/call_kw`;

  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        model: 'project.type',
        method: 'search_read',
        args: [[], ['name'], 0, 0, ''],
        kwargs: {},
        context: {
          tz: 'Asia/Ho_Chi_Minh',
          lang: 'en_US',
        },
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
}

function EditTaskERP(url, id, nameTask, deadline, sprintID) {
  const urlFull = `${url}/web/dataset/call_kw`;

  return new Promise((res, rej) => {
    Services(urlFull, {
      params: {
        model: 'project.task',
        method: 'write',
        args: [
          [id],
          {
            name: nameTask,
            date_deadline: deadline,
            sprint_id: sprintID,
          },
        ],
        kwargs: {},
        context: {
          tz: 'Asia/Ho_Chi_Minh',
          lang: 'vi_VN',
        },
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
}

export {
  GetListTaskERP,
  CreateTaskERP,
  GetListSprintERP,
  GetListProjectTypeERP,
  EditTaskERP,
};
