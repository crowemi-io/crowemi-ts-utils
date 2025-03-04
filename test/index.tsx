import React, { useState } from "react";
import Modal, {IModalProps, ModalType} from "../lib/ui/modal";


export default function t() {
    const [modal, setModal] = useState({ message: '', title: '', type: ModalType.Success, button: true, open: false, setOpen: setOpen } as IModalProps);

      function setOpen(open: boolean) : void { setModal(modal => ({ ...modal, open: open })) }

    return (
        <Modal {...modal} />
    )
}

