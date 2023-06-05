import {React,useState} from "react";
import "../../style/dash-msgs-style.css"

const Messages = ()=>{
    const dataArray = [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida bibendum urna, in vestibulum ipsum condimentum at. Sed tempus, elit nec maximus lacinia, elit nisi aliquet nisi, id feugiat quam quam vel arcu."
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          text: "Praesent id sagittis tellus. Vivamus placerat purus nec purus euismod cursus. Integer id libero nulla. Nam commodo pellentesque turpis ac dictum. Ut id mauris eu est iaculis fringilla. Mauris tincidunt faucibus dolor, id tincidunt est consequat vel."
        },
        {
          name: "Alice Johnson",
          email: "alice.johnson@example.com",
          text: "Fusce at ex in risus finibus laoreet. Mauris dignissim, arcu vel dictum sollicitudin, felis sem luctus nisi, vel iaculis quam eros at metus. Nulla luctus dui vel quam ultrices, in fermentum nisl sollicitudin."
        },
        {
          name: "Bob Anderson",
          email: "bob.anderson@example.com",
          text: "Integer gravida nibh in felis sagittis varius. Pellentesque quis turpis eget nisi pulvinar vulputate. Suspendisse sagittis fringilla maximus. Suspendisse potenti. Sed aliquam, leo in pellentesque sollicitudin, felis nisl fermentum arcu, at aliquam dolor ligula sit amet dui."
        },
        {
          name: "Emma Wilson",
          email: "emma.wilson@example.com",
          text: "Maecenas non pellentesque odio. Nulla auctor, metus at pharetra iaculis, velit massa vulputate augue, id posuere tellus erat at elit. Phasellus finibus lorem a tortor posuere dictum. Etiam nec ultrices ipsum."
        },
        {
          name: "Michael Brown",
          email: "michael.brown@example.com",
          text: "Duis nec neque a nunc scelerisque finibus ac sit amet nunc. Mauris eu sollicitudin lectus, vel fringilla ligula. Ut in lacus id arcu dignissim vestibulum non et justo. Nulla id facilisis sem. Ut vel magna augue."
        },
        {
          name: "Olivia Davis",
          email: "olivia.davis@example.com",
          text: "Vestibulum eu urna aliquam, vulputate elit vitae, sollicitudin tellus. Morbi et mauris non elit consequat ultrices ut et eros. Proin interdum tristique ullamcorper. Nulla facilisi. Sed gravida tristique urna vel volutpat."
        },
        {
          name: "William Taylor",
          email: "william.taylor@example.com",
          text: "Cras scelerisque congue arcu at posuere. Morbi sed efficitur lorem. Nullam accumsan mi felis, a elementum velit vestibulum ut. Duis semper faucibus lorem at vestibulum. Curabitur semper, elit sed dictum dictum, erat lectus ultricies lorem, et malesuada metus tellus in dolor."
        }
      ];
      const [selectedMessage, setSelectedMessage] = useState(null);
        const handleMessageClick = (index) => {
        setSelectedMessage(dataArray[index]);
        };
    return(
        <div className="Messages-container">
            <div className="aside">
                <h1>All Messages</h1>  
                <div className="msgsBox">
                {dataArray.map((msg, index) => {
                    return (
                        <div key={index}  
                        onClick={() => handleMessageClick(index)} 
                        className="message">
                        <span>{msg.name}</span>
                        <h3>{msg.email}</h3>
                        <p>{msg.text.slice(0, 44)+ '...'}</p>
                        </div>
                    );
                })}
             
                </div>  
            </div> 
            <div className="msgContext">
            {selectedMessage ? (
            < >
             <h1>Message from : </h1>
                <p>{selectedMessage.name}</p>
                <span>Email-address :</span> 
                <h5>{selectedMessage.email}</h5>
                <h2>Message : </h2>   
                <h6>
                {selectedMessage.text}
                </h6>
                <h4>Send on :</h4>
                <h5>12:00 AM 22/22/2014</h5>
            </>
            ): (
                <big>
                    No message is selected
                </big>
            )}
               
            </div> 
        </div>
    )
}

export default Messages;