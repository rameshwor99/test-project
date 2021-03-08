<script>
    // Please build a dynamic table component, based on the design provided plus an action column.
    let tableData = [
        {
            "name": "Load Balancer 3",
            "protocol": "HTTP",
            "port": "3000",
            "rule": "Round robin",
            "attached_groups": "Kevins VM Groups",
            "status": "Disabled"
        },
        {
            "name": "Load Balancer 1",
            "protocol": "HTTP",
            "port": "443",
            "rule": "Round robin",
            "attached_groups": "Moureens VM Groups",
            "status": "Starting"
        },
        {
            "name": "Load Balancer 2",
            "protocol": "HTTP",
            "port": "80",
            "rule": "DNS Delegation",
            "attached_groups": "Andrews VM Groups",
            "status": "Active"
        },
        {
            "name": "Load Balancer 6",
            "protocol": "HTTP",
            "port": "3000",
            "rule": "Round robin",
            "attached_groups": "Marcs VM Groups",
            "status": "Disabled"
        },
        {
            "name": "Load Balancer 4",
            "protocol": "HTTP",
            "port": "443",
            "rule": "Round robin",
            "attached_groups": "Mels VM Groups",
            "status": "Starting"
        },
        {
            "name": "Load Balancer 5",
            "protocol": "HTTP",
            "port": "80",
            "rule": "DNS Delegation",
            "attached_groups": "Ronjas VM Groups",
            "status": "Active"
        },
    ];
</script>
<style>
    table {
        margin: auto;
    }

    table th {
        text-transform: capitalize;
    }
</style>
<h1>Table</h1>
<table>
    <thead>
    <tr>
        {#each Object.keys(tableData[0]) as columnHeading}
            <th>{columnHeading.replace('_', ' ')}</th>
        {/each}
    </tr>
    </thead>
    <tbody>
    {#each Object.values(tableData) as row}
        <tr>
            {#each Object.values(row) as cell}
                <td>{cell}</td>
            {/each}
        </tr>
    {/each}
    </tbody>
</table>
