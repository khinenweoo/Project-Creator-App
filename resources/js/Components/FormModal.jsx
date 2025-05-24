import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function Modal({ visible, onHide, title, width, children }) {


    return (
        <Dialog header={title} visible={visible} style={{ width }} onHide={onHide}>
            {children}
        </Dialog>
    );
}
