import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, } from "@headlessui/react";
import { CheckIcon, ExclamationCircleIcon, ExclamationTriangleIcon, } from "@heroicons/react/24/outline";
export var ModalType;
(function (ModalType) {
    ModalType[ModalType["Success"] = 0] = "Success";
    ModalType[ModalType["Error"] = 1] = "Error";
    ModalType[ModalType["Warning"] = 2] = "Warning";
})(ModalType || (ModalType = {}));
function addButton(setOpen) {
    return (React.createElement("div", { className: "mt-5 sm:mt-6" },
        React.createElement("button", { type: "button", onClick: function () { return setOpen(false); }, className: "inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm" }, "okay")));
}
function getIcon(type) {
    switch (type) {
        case ModalType.Success:
            return (React.createElement("div", { className: "mx-auto flex size-12 items-center justify-center rounded-full bg-green-100" },
                React.createElement(CheckIcon, { "aria-hidden": "true", className: "size-6 text-green-600" })));
        case ModalType.Error:
            return (React.createElement("div", { className: "mx-auto flex size-12 items-center justify-center rounded-full bg-red-100" },
                React.createElement(ExclamationCircleIcon, { "aria-hidden": "true", className: "size-6 text-red-600" })));
        case ModalType.Warning:
            return (React.createElement("div", { className: "mx-auto flex size-12 items-center justify-center rounded-full bg-yellow-100" },
                React.createElement(ExclamationTriangleIcon, { "aria-hidden": "true", className: "size-6 text-yellow-600" })));
    }
}
export default function Modal(props) {
    return (React.createElement(Dialog, { open: props.open, onClose: props.setOpen, className: "relative z-10" },
        React.createElement(DialogBackdrop, { transition: true, className: "fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" }),
        React.createElement("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto" },
            React.createElement("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" },
                React.createElement(DialogPanel, { transition: true, className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95" },
                    React.createElement("div", null,
                        getIcon(props.type),
                        React.createElement("div", { className: "mt-3 text-center sm:mt-5" },
                            React.createElement(DialogTitle, { as: "h3", className: "text-base font-semibold text-gray-900" }, props.title),
                            React.createElement("div", { className: "mt-2" },
                                React.createElement("p", { className: "text-sm text-gray-500" }, props.message)))),
                    props.button ? addButton(props.setOpen) : null)))));
}
//# sourceMappingURL=modal.js.map