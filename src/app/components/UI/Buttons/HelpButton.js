import React, {Component} from 'react';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '../Modal'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class HelpButton extends Component {
  
  state ={
      modalOpen : false
  }

  helpModal = () => {
      this.setState({ modalOpen: !this.state.modalOpen})
  }

  render(){
    const { helpKey } = this.props
    const msg = 
        {
            bookingCalendarID_Help: {
                tooltip : 'Click the help button to learn more about how to get the calandar ID in your google calandar',
                modalTitle: 'Google calendar ID help',
                modalDescription: 'Documentation on how to find your google calandar ID',
                content: <BookingCalandarID/>
            },
            bookingCalendarAPI_Help: {
                tooltip : 'Click the help button to learn more about how to create the calandar API key in your google account',
                modalTitle: 'Google calendar API key help',
                modalDescription: 'Documentation on how to create your google calandar Api key',
                content: <BookingCalandarAPI/>
            },
            mainText_help: {
                tooltip : 'Click the help button to learn more about how to customise the Main Body Text',
                modalTitle: 'Customise Main Body Text',
                modalDescription: 'Add html tags to the text to customise the way it looks',
                content: <CustomiseMainText/>
            }
            
        }
    
    return (
        <div>
      <Tooltip title={msg[helpKey].tooltip}>
        <IconButton aria-label="Help" onClick={this.helpModal}>
          <HelpIcon />
        </IconButton>
      </Tooltip>
      <Modal
          open={this.state.modalOpen}
          title={msg[helpKey].modalTitle}
          description={msg[helpKey].modalDescription}
          handleClose={this.helpModal}
        >
          {msg[helpKey].content}
       </Modal>
      
    </div>
  );
}
}



const BookingCalandarID = () => {
    return (
        <div className='fullwidth'>
            <iframe src='https://docs.simplecalendar.io/make-google-calendar-public/' style={{width: '100%', height: '700px' }}></iframe>
        </div>
    )
}

const BookingCalandarAPI = () => {
    return (
        <div className='fullwidth'>
            <iframe src='https://docs.simplecalendar.io/google-api-key/' style={{width: '100%', height: '700px' }}></iframe>
        </div>
    )
}

const CustomiseMainText = () => {
    return (
        <div className='fullwidth'>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Functionality</TableCell>
                        <TableCell>Example</TableCell>
                        <TableCell>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><b>Bold Text</b></TableCell>
                        <TableCell>{'<b>The b tags</b> will make the text bold'}</TableCell>
                        <TableCell><b>The b tags</b> make the text bold</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><b>Italics Text</b></TableCell>
                        <TableCell>{'<i>The b tags</i> will look italics. <b><i>You can also combine the tags</i></b>'}</TableCell>
                        <TableCell><i>The b tags</i> will look italics. <b><i>You can also combine the tags</i></b></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default (HelpButton);