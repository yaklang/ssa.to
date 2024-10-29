import {
  AuditEmiterYakUrlProps,
  AuditYakUrlProps,
  RequestYakURLResponse,
} from "@site/src/pages/codeAnalysis/_codeDetailDrawer/CodeDetailDrawer";
import { NetWorkApi } from "@site/src/services/axiosInstance";

/**
 * @name 代码审计
 */
export const loadAuditFromYakURLRaw = (
  params: AuditYakUrlProps,
  body: string
): Promise<RequestYakURLResponse | null> => {
  return new Promise(async (resolve, reject) => {
    NetWorkApi<any, RequestYakURLResponse>({
      method: "post",
      url: "/yakurl",
      data: {
        method: "GET",
        url: params,
        body,
      },
    })
      .then((result) => {
        resolve(result);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
