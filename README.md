# R10 🏙

R10 was a great project, I learned the most in this project. It provided a simple layed out way to challenge myself, with all the skills i've learned throughout the course.

## Learning Curve

This project was a very good challenge, where I developed a good understanding of the difference between statefull and stateless components and how to build both. Also, what the strengths of each option are.

#### Challenges

My biggest challenge was understanding how the stack navigation worked, aswell as how to pass through the data based off the favesId helper.

EG.

```
              return (
            <FavesContext.Consumer>
              {({faveIds}) => (
                <Faves
                  allSessions={data.allSessions.filter(session =>
                    faveIds.includes(session.id),
                  )}
                  faveIds={faveIds}
                />
              )}
            </FavesContext.Consumer>
          );
```

### Installation Instructions

Clone/ Download the git repositories.

1.
run:
Yarn Install

2.
run:
react-native run-ios
