(async function () {
    const { LogsTfClient } = require("../dist");

    // Create a new client
    const client = new LogsTfClient("secret-api-key");

    // Get a paginated list of logs that have a title that includes "test"
    const logList = client.getSearchResults({
        title: "test"
    });

    // Get the 2nd page of logs (pages are 0-indexed)
    const page2 = await logList.page(1);

    // Get the first log from the second page and get its data
    const logData = await client.getLogData(page2[0].id);

    console.log(logData.data);
})();