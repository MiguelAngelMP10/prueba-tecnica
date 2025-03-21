import {Description, Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
import {useState} from 'react'

function Modal({cat}) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => setIsOpen(true)}>Details Cat
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                        <DialogTitle className="font-bold">{cat.id}</DialogTitle>
                        <Description>mkdfa</Description>
                        <img key={cat.id} src={cat.url} alt={cat.id}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio magnam omnis reiciendis!
                            Assumenda consectetur dolore dolorem, ex facere illum ipsa ipsum itaque, modi mollitia
                            necessitatibus perspiciatis, qui repellat temporibus tenetur?</p>
                        <div className="flex gap-4">
                            <button
                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                onClick={() => setIsOpen(false)}>Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default Modal