
/*
how to test JS-based custom drag-and-drop components from the https://x2f9rh.csb.app/ sandbox webpage.
the page contains only two sliders. Both rely on custom JS-based
 drag-and-drop logic and do not use the native DnD API.
*/

// 1. Approach #1 Using the cypress-drag-drop plugin drag function
/* 
Install cypress-drag-drop as dev dependency 
//  ----- npm install --save-dev @4tw/cypress-drag-drop
// add the following line to the support/commands.js file to make Cypress load the plugin
// ---- require("@4tw/cypress-drag-drop");

NOTE: cypress-drag-drop drag() function works both on elements based on the native DnD API and custom JS-based drag-and-drop elements
*/

describe('dnd spec', () => {
    it("should drag and drp[ slide to 40%", () => {
        cy.visit("https://x2f9rh.csb.app/?standalone");
        // the value corresponding to the 100% of the slider
        const maxValue = 20;

        // drag-and-drop target value in percentage
        const targetValue = 0.4; 

        cy
        // cy.get(".ant-slider.ant-slider-horizontal")
          .get(':nth-child(1) > .ant-col-12 > .ant-slider')
          .first()
          .then((slider) => {
            // defining the CSS selector for the slider handle HTML element
            const sliderHandleSelector = ".ant-slider-handle"

            //defingin the CSS slector for the slider handle
            const sliderHandle = cy.get(sliderHandleSelector).first();

            // getting the slider bounding box size
            const sliderBoundingBox = slider.get(0).getBoundingClientRect();

            // performing the drag-and-drop interaction
            // with the cypress-drag-drop drag function
            sliderHandle.drag(sliderHandleSelector, {
                force:true,
                target: {
                    // moving the slider to the target value in %
                    x: sliderBoundingBox.width * targetValue,
                    y : 0
                }
            })

            cy
            // retrieving the input HTML element
             .get(".ant-input-number-input")
             .first()
              // getting the "value" HTML attribute
             .invoke('attr', 'value')
             .then((value) => {
                // calculating the expected value
                const expectedValue = `$(maxValue * targetValue)`;

                cy.wrap(value).should("be.equal", expectedValue);
              })
        })
    })
})