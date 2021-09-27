import { Injectable } from "@angular/core";

declare let toastr: any

@Injectable()

export class ToastrService {
    success(message: string, tittle?: string) {
        toastr.success(message, tittle)
    }
    info(message: string, tittle?: string) {
        toastr.info(message, tittle)
    }
    warning(message: string, tittle?: string) {
        toastr.warning(message, tittle)
    }
    error(message: string, tittle?: string) {
        toastr.error(message, tittle)
    }
}