export class UpdateTaskStatusDto {
    id: string;
    patchParam: string;
}

export enum TaskPatchInduxes {
    TITLE = 'title',
    DESCRIPTION = 'description',
    STATUS = 'status',
}
