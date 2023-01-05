//based on https://kotlinlang.org/docs/js-react.html

import kotlinx.browser.document
import kotlinx.browser.*
import kotlinx.html.*
import kotlinx.html.dom.*

fun main() {
    document.body!!.append {
        p {
            +"Based on https://kotlinlang.org/docs/js-react.html"
        }
        form{
                label {
                    +"Name:"
                }
                textInput{
                    name="taskName"
                    id="taskName"
                }
                label {
                    +"Description:"
                }
                textInput{
                    name="taskDescription"
                    id="taskDescription"
                }
                br
                label {
                    +"Due to:"
                }
                dateInput{
                    name="taskDue"
                    id="taskDue"
                }
                 label {
                    +"Status"
                }
                select{
                    id="taskStatus"
                    option{
                        +"open"
                    }
                      option{
                        +"closed"
                    }
                      option{
                        +"pending"
                    }
                }
                br
                br
            }
          
        div {
            id="outputError"
            +"Please insert a Taskname."
        } 
        button {
            +"Add Task"
        }
        h2{
            +"Task-List:"
        }
        div{
            id="taskListContainer"
            ul{
                id="taskList"
                li{
                    +"Test-Task | Description: Test-Task für Tests | Due to: 2023-01-04 | Status: open "
                    button{
                        +"Delete"
                    }
                }
                li{
                    +"Test-Task2 | Description: Test-Task2 für Tests | Due to: 2023-01-04 | Status: open "
                    button{
                        +"Delete"
                    }
                }
            }
        }  
    }
}
