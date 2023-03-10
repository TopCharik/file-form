using FileForm.Api.Extensions;
using FileForm.Api.Helpers;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddBlobService(
    builder.Configuration["AzureStorageConnectionString"],
    builder.Configuration["AzureStorageContainerName"]
);
builder.Services.AddScoped<FormMapper>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapControllers();

app.Run();
