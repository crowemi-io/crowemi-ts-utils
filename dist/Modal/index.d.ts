import { default as React } from 'react';
export declare enum ModalType {
    Success = 0,
    Error = 1,
    Warning = 2
}
export interface IModalProps {
    message: string;
    title: string;
    type: ModalType;
    button: boolean;
    open: boolean;
    setOpen: (value: boolean) => void;
}
export declare function Modal(props: IModalProps): React.JSX.Element;
