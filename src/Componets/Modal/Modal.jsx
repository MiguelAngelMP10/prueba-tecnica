import {Description, Dialog, DialogPanel, DialogTitle} from '@headlessui/react';

function Modal({cat, onClose}) {
    return (
        <>
            <Dialog open={!!cat} onClose={onClose} className="relative z-50">
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-lg shadow-lg">
                        <DialogTitle className="font-bold text-xl">{cat.id}</DialogTitle>
                        <Description className="text-gray-700">Detalles del gato</Description>
                        <img key={cat.id} src={cat.url} alt={cat.id} className="w-full rounded-lg"/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio magnam omnis
                            reiciendis!
                            Assumenda consectetur dolore dolorem, ex facere illum ipsa ipsum itaque, modi mollitia
                            necessitatibus perspiciatis, qui repellat temporibus tenetur?
                        </p>
                        <div className="flex justify-end gap-4">
                            <button
                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-4 py-2"
                                onClick={onClose}>
                                Cerrar
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}

export default Modal;
