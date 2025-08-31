import { TableOfContents } from "./TableOfContents"
import { Footer } from './Footer.tsx'

export function PanelView() {
    return (
        <div className="container">
            <div className="panel-group">
                <div className="panel left-panel">
                    <TableOfContents/>
                </div>
                <div className="panel right-panel">
                    Book contents go here.
                </div>
            </div>
            <Footer/>
        </div>
    )
}