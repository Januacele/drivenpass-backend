type appErrorsType = "conflict" | "not_found" | "unauthorized" | "unprocessable_entity";

export interface IAppError {
    type: appErrorsType;
    message: string;
}

export function foundAppError(error: object): error is IAppError {
    return (error as IAppError).type !== undefined;
}

export function errorStatusCodeApp(type: appErrorsType){
    if (type === "conflict") return 409;
    if (type === "not_found") return 404;
    if (type === "unauthorized") return 401;
    if (type === "unprocessable_entity") return 422;

    return 400;
}

export function conflictError(message: string): IAppError {
    return { type: "conflict", message };
  }
  
  export function notFoundError(message: string): IAppError {
    return { type: "not_found", message };
  }
  
  export function unauthorizedError(message: string): IAppError {
    return { type: "unauthorized", message };
  }
  
  export function unprocessableEntity(message: string): IAppError {
    return { type: "unprocessable_entity", message };
  }